#!/usr/bin/env python3
# -*- coding: utf-8 -*-
#
#  tests/parser.py
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

import unittest

import rule_engine.ast as ast
import rule_engine.engine as engine
import rule_engine.parser as parser

class ParserTests(unittest.TestCase):
	context = engine.Context()
	def test_parser_order_of_operations(self):
		parser_ = parser.Parser()
		cases = (
			'100 * ( 2 + 12 ) / 14',
			'50 + 50 * 2 - 50',
			'19 + 9 ** 2',
			'(4 * 5) ** 2 / 4'
		)
		for case in cases:
			statement = parser_.parse(case, self.context)
			self.assertIsInstance(statement.expression, ast.FloatExpression)
			self.assertEqual(statement.evaluate(None), 100)

	def test_parser_returns_statement(self):
		parser_ = parser.Parser()
		expression = parser_.parse('true', self.context)
		self.assertIsInstance(expression, ast.Statement)

if __name__ == '__main__':
	unittest.main()
