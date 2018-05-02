#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  tests/engine.py
#
#  Redistribution and use in source and binary forms, with or without
#  modification, are permitted provided that the following conditions are
#  met:
#
#  * Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
#  * Redistributions in binary form must reproduce the above
#    copyright notice, this list of conditions and the following disclaimer
#    in the documentation and/or other materials provided with the
#    distribution.
#  * Neither the name of the project nor the names of its
#    contributors may be used to endorse or promote products derived from
#    this software without specific prior written permission.
#
#  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
#  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
#  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
#  A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
#  OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
#  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
#  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
#  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
#  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
#  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
#  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#

import collections
import unittest

import rule_engine.ast as ast
import rule_engine.engine as engine
import rule_engine.errors as errors

class EngineTests(unittest.TestCase):
	def test_engine_resolve_attribute(self):
		thing = collections.namedtuple('Thing', ('name',))(name='alice')
		self.assertEqual(engine.resolve_attribute(thing, 'name'), thing.name)
		with self.assertRaises(errors.SymbolResolutionError):
			engine.resolve_attribute(thing, 'email')

	def test_engine_resolve_item(self):
		thing = {'name': 'Alice'}
		self.assertEqual(engine.resolve_item(thing, 'name'), thing['name'])
		with self.assertRaises(errors.SymbolResolutionError):
			engine.resolve_attribute(thing, 'email')

	def test_engine_rule_is_valid(self):
		self.assertTrue(engine.Rule.is_valid('test == 1'))
		self.assertFalse(engine.Rule.is_valid('test =='))

	def test_engine_rule_raises(self):
		with self.assertRaises(errors.RuleSyntaxError):
			engine.Rule('test ==')

	def test_engine_type_resolver_from_dict(self):
		type_resolver = engine.type_resolver_from_dict({
			'string': ast.DataType.STRING,
			'float': ast.DataType.FLOAT
		})
		self.assertTrue(callable(type_resolver))
		self.assertEqual(type_resolver('string'), ast.DataType.STRING)
		self.assertEqual(type_resolver('float'), ast.DataType.FLOAT)
		with self.assertRaises(errors.SymbolResolutionError):
			type_resolver('doesnotexist')

if __name__ == '__main__':
	unittest.main()