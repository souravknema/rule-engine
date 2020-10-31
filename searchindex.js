Search.setIndex({docnames:["attributes","change_log","debug_repl","getting_started","index","rule_engine/ast","rule_engine/engine","rule_engine/errors","rule_engine/index","rule_engine/parser","syntax"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["attributes.rst","change_log.rst","debug_repl.rst","getting_started.rst","index.rst","rule_engine/ast.rst","rule_engine/engine.rst","rule_engine/errors.rst","rule_engine/index.rst","rule_engine/parser.rst","syntax.rst"],objects:{"rule_engine.ast":{ArithmeticComparisonExpression:[5,1,1,""],ArithmeticExpression:[5,1,1,""],BitwiseExpression:[5,1,1,""],BooleanExpression:[5,1,1,""],ComparisonExpression:[5,1,1,""],ContainsExpression:[5,1,1,""],DataType:[5,1,1,""],ExpressionBase:[5,1,1,""],FloatExpression:[5,1,1,""],FuzzyComparisonExpression:[5,1,1,""],GetAttributeExpression:[5,1,1,""],LeftOperatorRightExpressionBase:[5,1,1,""],LiteralExpressionBase:[5,1,1,""],LogicExpression:[5,1,1,""],NullExpression:[5,1,1,""],Statement:[5,1,1,""],StringExpression:[5,1,1,""],SymbolExpression:[5,1,1,""],TernaryExpression:[5,1,1,""],UnaryExpression:[5,1,1,""],coerce_value:[5,3,1,""],is_integer_number:[5,3,1,""],is_natural_number:[5,3,1,""],is_numeric:[5,3,1,""],is_real_number:[5,3,1,""]},"rule_engine.ast.ArithmeticComparisonExpression":{result_type:[5,2,1,""]},"rule_engine.ast.ArithmeticExpression":{result_type:[5,2,1,""]},"rule_engine.ast.BitwiseExpression":{result_type:[5,2,1,""]},"rule_engine.ast.BooleanExpression":{result_type:[5,2,1,""]},"rule_engine.ast.ComparisonExpression":{result_type:[5,2,1,""]},"rule_engine.ast.ContainsExpression":{result_type:[5,2,1,""]},"rule_engine.ast.DataType":{ARRAY:[5,2,1,""],BOOLEAN:[5,2,1,""],DATETIME:[5,2,1,""],FLOAT:[5,2,1,""],MAPPING:[5,2,1,""],NULL:[5,2,1,""],STRING:[5,2,1,""],UNDEFINED:[5,2,1,""],__call__:[5,3,1,"id0"],from_name:[5,4,1,""],from_type:[5,4,1,""],from_value:[5,4,1,""],is_compatible:[5,4,1,""],is_definition:[5,4,1,""]},"rule_engine.ast.ExpressionBase":{evaluate:[5,4,1,""],reduce:[5,4,1,""],result_type:[5,2,1,""]},"rule_engine.ast.FloatExpression":{result_type:[5,2,1,""]},"rule_engine.ast.FuzzyComparisonExpression":{result_type:[5,2,1,""]},"rule_engine.ast.GetAttributeExpression":{result_type:[5,2,1,""]},"rule_engine.ast.LeftOperatorRightExpressionBase":{__init__:[5,4,1,""],compatible_types:[5,2,1,""]},"rule_engine.ast.LiteralExpressionBase":{__init__:[5,4,1,""]},"rule_engine.ast.LogicExpression":{result_type:[5,2,1,""]},"rule_engine.ast.NullExpression":{result_type:[5,2,1,""]},"rule_engine.ast.StringExpression":{result_type:[5,2,1,""]},"rule_engine.ast.SymbolExpression":{result_type:[5,2,1,""]},"rule_engine.ast.TernaryExpression":{result_type:[5,2,1,""]},"rule_engine.ast.UnaryExpression":{result_type:[5,2,1,""]},"rule_engine.engine":{Builtins:[6,1,1,""],Context:[6,1,1,""],Rule:[6,1,1,""],resolve_attribute:[6,3,1,""],resolve_item:[6,3,1,""],type_resolver_from_dict:[6,3,1,""]},"rule_engine.engine.Builtins":{__init__:[6,4,1,""],from_defaults:[6,4,1,""],resolve_type:[6,4,1,""],scope_name:[6,2,1,""]},"rule_engine.engine.Context":{__init__:[6,4,1,""],builtins:[6,2,1,""],default_timezone:[6,2,1,""],default_value:[6,2,1,""],regex_flags:[6,2,1,""],resolve:[6,4,1,""],resolve_attribute:[6,4,1,""],resolve_attribute_type:[6,4,1,""],resolve_type:[6,4,1,""],symbols:[6,2,1,""]},"rule_engine.engine.Rule":{__init__:[6,4,1,""],evaluate:[6,4,1,""],filter:[6,4,1,""],is_valid:[6,4,1,""],matches:[6,4,1,""],parser:[6,2,1,""],to_graphviz:[6,4,1,""]},"rule_engine.errors":{AttributeResolutionError:[7,5,1,""],AttributeTypeError:[7,5,1,""],DatetimeSyntaxError:[7,5,1,""],EngineError:[7,5,1,""],EvaluationError:[7,5,1,""],LookupError:[7,5,1,""],RegexSyntaxError:[7,5,1,""],RuleSyntaxError:[7,5,1,""],SymbolResolutionError:[7,5,1,""],SymbolTypeError:[7,5,1,""],SyntaxError:[7,5,1,""],UNDEFINED:[7,6,1,""]},"rule_engine.errors.AttributeResolutionError":{__init__:[7,4,1,""],attribute_name:[7,2,1,""],object:[7,2,1,""],thing:[7,2,1,""]},"rule_engine.errors.AttributeTypeError":{__init__:[7,4,1,""],attribute_name:[7,2,1,""],expected_type:[7,2,1,""],is_type:[7,2,1,""],is_value:[7,2,1,""],object_type:[7,2,1,""]},"rule_engine.errors.DatetimeSyntaxError":{__init__:[7,4,1,""],value:[7,2,1,""]},"rule_engine.errors.EngineError":{__init__:[7,4,1,""],message:[7,2,1,""]},"rule_engine.errors.LookupError":{__init__:[7,4,1,""],container:[7,2,1,""],item:[7,2,1,""]},"rule_engine.errors.RegexSyntaxError":{__init__:[7,4,1,""],error:[7,2,1,""],value:[7,2,1,""]},"rule_engine.errors.RuleSyntaxError":{__init__:[7,4,1,""],token:[7,2,1,""]},"rule_engine.errors.SymbolResolutionError":{__init__:[7,4,1,""],symbol_name:[7,2,1,""],symbol_scope:[7,2,1,""],thing:[7,2,1,""]},"rule_engine.errors.SymbolTypeError":{__init__:[7,4,1,""],expected_type:[7,2,1,""],is_type:[7,2,1,""],is_value:[7,2,1,""],symbol_name:[7,2,1,""]},"rule_engine.parser":{Parser:[9,1,1,""],ParserBase:[9,1,1,""]},"rule_engine.parser.Parser":{__init__:[9,4,1,""]},"rule_engine.parser.ParserBase":{__init__:[9,4,1,""],parse:[9,4,1,""],precedence:[9,2,1,""],reserved_words:[9,2,1,""]},debug_repl:{"--edit-console":[2,7,1,"cmdoption-debug_repl-edit-console"],"--edit-file":[2,7,1,"cmdoption-debug_repl-edit-file"]},rule_engine:{ast:[5,0,0,"-"],engine:[6,0,0,"-"],errors:[7,0,0,"-"],parser:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","data","Python data"],"7":["std","cmdoption","program option"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method","5":"py:exception","6":"py:data","7":"std:cmdoption"},terms:{"0b10":10,"0e0":10,"0o10":10,"0x10":10,"0x7f2bdafbe650":3,"11th":1,"14159":10,"15th":1,"1e0":10,"2018":1,"2019":[1,10],"2020":[1,3],"27th":1,"2nd":1,"3rd":1,"71828":10,"753":3,"8601":10,"9th":1,"abstract":[3,5,6,9],"boolean":[0,3,5,6,10],"case":[2,3,5,6],"class":[1,3,7],"default":[0,6,10],"enum":1,"final":10,"float":[0,3,5,10],"function":[0,1,3],"import":4,"int":[3,6,10],"new":[1,5,7],"null":[1,3,5,10],"return":[3,5,6,9],"super":3,"switch":1,"true":[2,3,4,5,6,10],"while":[3,6,7,9,10],Added:[1,6,7],For:[3,10],Not:10,One:[5,10],The:[0,2,3,5,6,7,9,10],There:3,These:[5,6,10],With:3,__call__:5,__init__:[1,3,5,6,7,9],__version__:3,_datatypedef:5,abc:6,abil:1,abl:[5,7,9],about:3,access:[3,6,10],action:1,add:3,added:3,addit:[1,3,5,10],addition:[2,6,10],advanc:4,after:6,against:6,all:[1,3,5,6,10],allow:[1,2,3,5,6,9],also:[3,10],altern:[3,10],alwai:5,analog:[7,10],ani:[3,5,6,9,10],anoth:[3,10],api:[6,9],appear:6,append:10,appli:[3,4,6,10],applic:5,appropri:6,arbitrari:[3,4,6],arg:[3,5],argument:[3,4,6],arithmet:[1,5,10],arithmeticcomparisonexpress:5,arithmeticexpress:5,arrai:[0,1,3,5,10],artist:3,as_low:0,as_upp:[0,3],aspect:6,assum:3,ast:[3,4,6,7,8,9],astnodebas:5,attempt:10,attribut:[1,4,5,6,7,10],attribute_nam:7,attributeresolutionerror:7,attributetypeerror:7,august:1,author:3,automat:[1,3,6],avail:[2,3,4,7],awar:10,base:[3,6,7,9,10],basic:[4,10],batman:[2,3],becaus:3,becom:3,been:[3,9],befor:[5,6,10],behav:3,behavior:[3,6],being:[3,5,6,7,10],below:10,binari:10,bit:10,bitwis:[5,10],bitwiseexpress:5,book:[2,3],bool:[5,6,9,10],booleanexpress:[5,10],borrow:3,both:[5,10],boundari:[5,10],built:6,builtin:[1,4,6,7],call:[3,6],callback:6,can:[0,2,3,4,5,6,7,9,10],capabl:5,captain:3,case_fals:5,case_tru:5,caus:[7,9],center:5,certain:[3,6],chang:[4,6,7],charact:[5,10],check:[0,3,5,6,10],children:5,classmethod:[5,6],cli:4,code:2,coerce_valu:5,collect:[3,5,6],combin:7,come:10,comic:[2,3],command:2,compar:[3,5,10],comparison:[1,3,5,6,10],comparisonexpress:5,compat:[3,5,6,10],compatible_typ:5,complex:[3,5],compon:[9,10],compos:5,compound:[0,5],compris:5,condit:[3,5],configur:[3,4],confus:10,consid:5,consist:3,consol:2,constant:[5,6,10],constraint:6,construct:9,constructor:3,contain:[1,2,3,5,6,7,9,10],containsexpress:5,content:4,context:[0,2,3,5,6,9,10],continu:1,contribut:3,conveni:[3,6],convers:[1,5],convert:[5,9],correct:6,correspond:[5,6,9],could:3,coverag:1,creat:[3,4,6,10],curat:1,current:[1,5,10],custom:[1,2,6,10],custombuiltinscontext:3,dai:[0,10],darth:4,data:[1,4,5,6,10],datatyp:[1,3,4,5,6],date:[0,3,10],datetim:[0,3,4,5,6,7,10],datetimesyntaxerror:7,dateutil:10,debug:[1,3,4,9],debug_repl:2,decemb:1,decim:10,def:3,default_timezon:[3,6,10],default_timzezon:6,default_valu:[1,3,6],defin:[2,4,5,6,9,10],definit:[5,9],demonstr:2,deploy:1,descript:[7,10],desir:3,despit:5,detect:3,determin:[0,3],develop:[1,3],diagram:6,dict:[2,3,6,10],dictionari:[0,6],differ:[5,10],digraph:6,direct:3,divis:10,document:[1,3,10],doe:[5,6,9],done:3,dot:3,doubl:10,dt1:5,dt2:5,dure:[7,9],dvader:4,each:[1,3,6],edit:2,effect:6,effici:9,either:[2,3,5,6,7,10],element:10,elif:3,email:4,empir:4,empti:3,enabl:9,enclos:10,end:[3,10],engin:[1,2,3,5,7,8,10],engineerror:7,ensur:[3,6],entri:1,enumer:3,environ:2,equal:[5,10],equival:10,error:[3,4,8],eval:[2,3],evalu:[0,2,3,4,5,6,7,9,10],evaluationerror:[3,7,9,10],exactli:10,exampl:[3,5,6,10],except:[3,5,6,9,10],exclud:10,exec:3,execut:2,exist:[5,6],exit:2,expect:[3,7],expected_typ:7,explicit:3,expon:10,expos:[3,6],express:[1,2,3,4,6,7],expressionbas:5,extern:[5,6],extract:1,face:6,fail:[0,3,7,10],fals:[2,3,4,5,9,10],falsi:7,favor:1,featur:[3,4,9],few:3,file:2,filter:[3,6],finit:5,first:[1,3,4,5,10],first_nam:4,flag:6,flash:3,flexibl:3,floatexpress:[5,10],floor:10,folder:4,follow:[0,2,3,10],foobar:10,form:6,format:[3,7,10],forward:3,four:[3,10],from:[0,1,2,4,5,6,7,9,10],from_default:[3,6,10],from_nam:5,from_typ:5,from_valu:5,fuzzi:10,fuzzycomparisonexpress:5,gener:[3,4,5,6],get:[1,4,5,10],getattributeexpress:5,git:1,github:[1,4],given:3,grammar:[4,5,6,7,9],graph:3,graphviz:[1,3,6],greater:[5,10],group:[1,10],had:3,hand:3,handl:[3,5,6],has:[0,2,3,9,10],have:[1,3,6,10],held:10,help:[3,5],here:10,hexadecim:10,hint:[1,4,6],hour:0,how:[3,6],howev:[6,10],http:4,identifi:[3,7],improp:7,improperli:7,improv:1,includ:[2,3,4,10],incompat:[3,7,10],index:[1,4,7,10],indexerror:7,indic:5,inf:10,infin:10,inform:[1,3,5,6,7,10],inherit:[7,9],initi:[3,6],insensit:6,inspect:4,instanc:[2,3,5,6],instead:[3,10],integ:[3,5],integr:1,interact:2,interfac:6,invalid:[3,10],involv:[5,9],is_compat:5,is_definit:5,is_empti:0,is_integer_numb:5,is_natural_numb:5,is_numer:5,is_real_numb:5,is_typ:7,is_valid:[3,6],is_valu:7,iso:10,isopars:10,issu:[2,3,6,7],item:[1,3,5,6,7,10],iter:[1,3,6],its:[3,5],itself:[5,6,10],just:[3,10],kei:[0,3,5,6,7],key_typ:5,keyerror:7,keyword:3,kind:[3,5],know:3,known:[3,6],kwarg:[1,3,5,6,9],languag:[3,4],last:10,last_nam:4,later:9,lead:10,lee:3,left:[3,10],leftoperatorrightexpressionbas:5,length:[0,10],less:[5,10],letter:[3,10],level:5,leverag:10,lexicograph:10,librari:4,like:3,line:2,list:[1,10],liter:[3,4,6,9],literalexpressionbas:5,local:6,log:4,logic:[4,5,6,9,10],logicexpress:5,look:[3,6],lookup:[7,10],lookuperror:[7,10],loop:2,loss:5,luke:4,mai:[2,3,10],major:1,make:[3,9],mani:9,manner:[5,10],map:[0,1,3,5,6,9,10],march:1,marvel:3,match:[1,3,4,5,6,10],mathemat:10,mean:[3,10],meant:3,member:[0,1,3,5,6,9,10],membership:10,messag:7,method:[3,5,6,10],microsecond:0,midnight:[3,10],might:3,millisecond:0,minut:[0,3],miss:6,modifi:3,modul:[2,4,5,6,7,9],modulo:10,month:0,more:[3,4,9,10],most:3,multipl:[1,9,10],must:[3,5,6,10],name:[0,3,4,5,6,7,9,10],namedtupl:6,namespac:6,nan:[5,10],nativ:[0,5,7],natur:[5,10],navig:1,necessari:[2,3,6],necessarili:6,need:[3,6],neg:[5,10],neither:3,net:4,node:[5,7,9],non:[3,5,10],none:[3,5,6,7],nonetyp:10,normal:[3,10],notat:10,note:[1,3,10],notic:3,now:[3,10],nullabl:3,nullexpress:[5,10],number:[3,5,10],numer:[5,10],object:[0,2,4,5,6,7,9,10],object_:[5,6,7],object_typ:[6,7],obtain:[7,10],occur:7,octal:10,octob:1,off:10,often:3,omit:3,onc:[2,3,9],one:[3,5,6],ones:3,onli:[3,10],open:10,oper:[0,1,3,6,7,9],option:[1,2,3,4,6,9,10],order:10,org:4,other:[3,6,7,10],otherwis:[3,5],outlin:10,output:1,over:6,overlap:3,overrid:3,overridden:10,own:[0,4],packag:[2,3,6,7],page:4,paramet:[3,5,6,7,9],parent:3,pars:[5,6,7,9,10],parser:[4,6,8,10],parserbas:9,particular:5,pass:[3,6],path:2,perform:[6,7],phase:[7,9],pipfil:1,place:[6,9,10],ply:[7,9],point:[5,10],popul:3,portion:3,possibl:3,potenti:3,preced:9,prefix:[3,6,10],previou:3,primari:[3,6],print:2,prior:3,progress:1,project:4,proper:1,provid:[2,3,4,6,9,10],publish:[2,3],punctuat:3,purpos:[2,3,4,5],python:[0,2,3,4,5,6,7,10],python_typ:5,python_valu:5,quot:10,rais:[3,5,6,7,9,10],re_group:[1,10],read:2,real:5,reason:[3,10],rebel:4,recurs:[0,5],reduc:[5,9],reduct:[7,9],refer:[3,6,10],referenc:[3,10],regard:[6,7],regex:[3,4,6,10],regex_flag:6,regexsyntaxerror:7,regular:[1,3,4,5,7],relat:[7,9],releas:[1,3],remov:[1,3],repl:[1,4],replac:[5,6,10],report:1,repres:[5,10],requir:[3,10],reserv:9,reserved_word:9,resolut:[5,6,7],resolv:[0,1,5,6,7,10],resolve_attribut:[3,6],resolve_attribute_typ:6,resolve_item:[3,6],resolve_typ:6,respect:[3,10],rest:3,result:[2,5,6],result_typ:5,retriev:[1,5,6],right:[3,10],root:7,rubi:3,rule:[0,1,2,5,6,7,9],rule_engin:[2,3,4,5,6,7,9],rulesyntaxerror:7,run:2,safe:[1,3,5,10],same:[3,5,6,10],scientif:10,scope:[5,6,7],scope_nam:6,script:1,search:[4,5,6,10],second:[0,3,5],section:3,secur:3,see:[3,4,6,10],self:3,sensit:6,sentinel:7,separ:5,septemb:1,sequenc:[1,10],set:[6,10],setup:2,share:3,shift:[5,10],should:[3,6,7],show:10,side:[3,5],signatur:3,similar:[3,10],simpl:3,simpli:3,sinc:2,singl:[3,5,6,10],skywalk:4,slice:1,small:10,smaller:5,some:[1,3,4,6,10],someth:7,sourc:[2,3,5,6,7,9],space:3,special:6,specif:[9,10],specifi:[1,2,3,5,6,7,9,10],stan:3,standard:10,start:[1,2,4],statement:[5,9],stop:10,str:[3,5,6,7,9,10],string:[0,1,3,4,5,6,10],stringexpress:5,structur:[3,6],sub:10,subclass:[5,6,10],submemb:0,subset:5,subtract:[5,10],success:5,successfulli:3,suitabl:[3,6],superman:2,support:[1,3,5,6],symbol:[1,2,4,5,6,7],symbol_nam:7,symbol_scop:7,symbolexpress:5,symbolresolutionerror:[3,6,7],symboltypeerror:[3,7],syntact:6,syntax:[3,4,5,6,7,9],syntaxerror:7,tabl:10,take:[3,5,9],taken:10,target:3,team:1,technic:10,techniqu:[3,10],ternari:5,ternaryexpress:5,test:[1,2,3,5,6],text:[3,4,5,6,7,9],than:[5,10],thei:[3,4],them:3,thi:[0,1,2,3,4,5,6,7,9,10],thing:[0,2,3,5,6,7],those:3,through:[2,3,10],time:[3,5,6,7,9,10],timestamp:6,timezon:[3,6,10],titl:[2,3],to_ari:[0,1],to_default_dict:1,to_default_resolv:1,to_flt:[0,1],to_graphviz:[3,6],to_int:[0,1],to_recursive_resolv:1,todai:10,token:7,top:5,travi:1,treat:3,tree:[3,5,6,9],trigger:7,tupl:[5,10],two:[3,5],type:[0,1,4,5,6,7,9,10],type_:5,type_resolv:[3,6],type_resolver_from_dict:[3,6],typeerror:[5,6],tzinfo:6,unari:5,unaryexpress:5,unavail:10,undefin:[3,5,6,7],underli:10,unit:1,unknown:[3,5],unlik:[6,10],unnecessari:3,untrust:3,use:[3,5,6,7,10],used:[0,2,3,5,6,7,10],useful:[3,5],user:[2,3],uses:3,using:[1,2,3,6,9,10],utc:6,util:[1,10],vader:4,valid:[3,5,6,7,10],valu:[0,5,6,7],value_typ:[5,6],value_type_nul:5,valueerror:5,variabl:[3,6],variant:10,variat:3,variou:[3,9],veri:10,verifi:[5,6],verify_typ:5,version:[2,3,4,5,6,7,10],versionad:7,via:3,view:2,wai:3,weekdai:0,well:[5,6],were:3,what:[6,7],when:[0,2,3,5,6,7,9,10],where:[3,7],whether:[3,4,5,6,9],which:[0,2,3,4,5,6,7,9,10],whitelist:6,whitespac:3,whole:5,whose:3,wise:10,within:[3,5,6,7,9,10],without:[3,5],word:9,work:10,worthi:1,would:[3,6],written:4,xor:[5,10],year:0,yield:[3,6],yyyi:3,zero:3,zerostein:4,zone_nam:0},titles:["Data Attributes","Change Log","Debug REPL","Getting Started","Rule Engine Documentation","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">ast</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">engine</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">errors</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">rule_engine</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">parser</span></code>","Rule Syntax"],titleterms:{"class":[5,6,9],"default":3,"function":[5,6],accessor:10,advanc:3,argument:2,ast:5,attribut:[0,3],back:3,base:5,basic:3,builtin:[0,3,10],chang:[1,3],cli:2,compound:3,configur:2,custom:3,data:[0,3,7],debug:2,defin:3,dictionari:3,document:4,engin:[4,6],error:7,exampl:[2,4],except:7,express:[5,10],from:3,get:3,grammar:10,hierarchi:7,hint:3,indic:4,inspect:3,keyword:10,left:5,liter:[5,10],log:1,math:10,miscellan:5,object:3,oper:[5,10],parser:9,regular:10,relat:10,repl:2,reserv:10,resolv:3,right:5,rule:[3,4,10],rule_engin:8,set:3,start:3,support:10,symbol:[3,10],syntax:10,tabl:4,timestamp:10,type:3,usag:[2,3,4],valu:[3,10],version:1}})