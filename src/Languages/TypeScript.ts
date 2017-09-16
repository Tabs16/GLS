import { CLikeLanguage } from "./CLikeLanguage";
import { CaseStyle } from "./Casing/CaseStyle";
import { ArrayProperties } from "./Properties/ArrayProperties";
import { BooleanProperties } from "./Properties/BooleanProperties";
import { ClassProperties } from "./Properties/ClassProperties";
import { ClassMemberVariableProperties } from "./Properties/ClassMemberVariableProperties";
import { CommentProperties } from "./Properties/CommentProperties";
import { ConditionalProperties } from "./Properties/ConditionalProperties";
import { DictionaryProperties } from "./Properties/DictionaryProperties";
import { EnumProperties } from "./Properties/EnumProperties";
import { ExceptionProperties } from "./Properties/ExceptionProperties";
import { FileProperties } from "./Properties/FileProperties";
import { FunctionProperties } from "./Properties/FunctionProperties";
import { GeneralProperties } from "./Properties/GeneralProperties";
import { ImportProperties } from "./Properties/ImportProperties";
import { InterfaceProperties } from "./Properties/InterfaceProperties";
import { LambdaProperties } from "./Properties/LambdaProperties";
import { ListProperties } from "./Properties/ListProperties";
import { LoopProperties } from "./Properties/LoopProperties";
import { MathProperties } from "./Properties/MathProperties";
import { NewProperties, NewInstantiationSyntaxKind } from "./Properties/NewProperties";
import { NativeCallProperties, NativeCallScope, NativeCallType } from "./Properties/NativeCallProperties";
import { NumberProperties } from "./Properties/NumberProperties";
import { OperatorProperties } from "./Properties/OperatorProperties";
import { OutputProperties } from "./Properties/OutputProperties";
import { ParameterProperties } from "./Properties/ParameterProperties";
import { StringProperties } from "./Properties/StringProperties";
import { StringFormatProperties } from "./Properties/StringFormatProperties";
import { StyleProperties } from "./Properties/StyleProperties";
import { VariableProperties } from "./Properties/VariableProperties";

/**
 * A summary of information for the TypeScript language.
 */
export class TypeScript extends CLikeLanguage {
    /**
     * Generates metadata on arrays.
     * 
     * @param arrays   A property container for metadata on arrays.
     */
    protected generateArrayProperties(arrays: ArrayProperties): void {
        arrays.className = "Array";
        arrays.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);
    }

    /**
     * Generates metadata on booleans.
     * 
     * @param booleans   A property container for metadata on booleans.
     */
    protected generateBooleanProperties(booleans: BooleanProperties): void {
        booleans.className = "boolean";
    }

    /**
     * Generates metadata on classes.
     * 
     * @param classes   A property container for metadata on classes.
     */
    protected generateClassProperties(classes: ClassProperties): void {
        super.generateClassProperties(classes);

        classes.aliases = {
            "dictionary": "object",
            "double": "number",
            "float": "number",
            "int": "number"
        };

        classes.constructorKeyword = "constructor";
        classes.constructorUsesKeyword = true;
        classes.declareExtendsLeft = " extends ";
        classes.declareImplementsLeft = " implements ";
        classes.declareStartRight = " {";
        classes.generics.used = true;

        classes.members.functions.private = "private ";
        classes.members.functions.privateCase = CaseStyle.CamelCase;
        classes.members.functions.protected = "protected ";
        classes.members.functions.protectedCase = CaseStyle.CamelCase;
        classes.members.functions.public = "public ";
        classes.members.functions.publicCase = CaseStyle.CamelCase;

        classes.statics.functions.private = "private ";
        classes.statics.functions.privateCase = CaseStyle.CamelCase;
        classes.statics.functions.protected = "protected ";
        classes.statics.functions.protectedCase = CaseStyle.CamelCase;
        classes.statics.functions.public = "public ";
        classes.statics.functions.publicCase = CaseStyle.CamelCase;

        classes.statics.variables.private = "private ";
        classes.statics.variables.privateCase = CaseStyle.CamelCase;
        classes.statics.variables.protected = "protected ";
        classes.statics.variables.protectedCase = CaseStyle.CamelCase;
        classes.statics.variables.public = "public ";
        classes.statics.variables.publicCase = CaseStyle.CamelCase;

        classes.superConstructor = "super";
    }

    /**
     * Generates metadata on class member variables.
     * 
     * @param members   A property container for metadata on class member variables.
     */
    protected generateClassMemberVariableProperties(variables: ClassMemberVariableProperties): void {
        super.generateClassMemberVariableProperties(variables);

        variables.protectedCase = CaseStyle.CamelCase;
        variables.publicCase = CaseStyle.CamelCase;
    }

    /**
     * Generates metadata on comments.
     * 
     * @param comments   A property container for metadata on comments.
     */
    protected generateCommentProperties(comments: CommentProperties): void {
        super.generateCommentProperties(comments);

        comments.docEnd = " */";
        comments.docLineEnd = "";
        comments.docLineStart = " * ";
        comments.docTagAliases = {
            "note": "remarks",
            "parameter": "param",
            "returns": "returns",
            "summary": "",
            "todo": "todo"
        };
        comments.docTagsWithParameters = {
            "summary": "\0",
            "parameter": ""
        };
        comments.docTagEnd = " ";
        comments.docTagSpaceAfter = "  ";
        comments.docTagStart = "@";
        comments.docStart = "/**";
    }

    /**
     * Generates metadata on conditionals.
     * 
     * @param conditionals   A property container for metadata on conditionals.
     */
    protected generateConditionalProperties(conditionals: ConditionalProperties): void {
        super.generateConditionalProperties(conditionals);

        conditionals.continueLeft = "} ";
        conditionals.continueRight = " {";
        conditionals.startRight = ") {";
    }

    /**
     * Generates metadata on dictionaries.
     * 
     * @param dictionaries   A property container for metadata on dictionaries.
     */
    protected generateDictionaryProperties(dictionaries: DictionaryProperties): void {
        dictionaries.className = "Object";
        dictionaries.containsKey = new NativeCallProperties(
            "hasOwnProperty",
            NativeCallScope.Member,
            NativeCallType.Function);
        dictionaries.keys = new NativeCallProperties(
            "Object.keys",
            NativeCallScope.Static,
            NativeCallType.Function);
        dictionaries.initializeEnd = "}";
        dictionaries.initializePairComma = ",";
        dictionaries.initializePairLeft = "";
        dictionaries.initializePairMiddle = ": ";
        dictionaries.initializePairRight = "";
        dictionaries.initializeStart = "{";
        dictionaries.typeLeft = "{ [i: ";
        dictionaries.typeMiddle = "]: ";
        dictionaries.typeRight = " }";
    }

    /**
     * Generates metadata on enums.
     * 
     * @param enums   A property container for metadata on enums.
     */
    protected generateEnumProperties(enums: EnumProperties): void {
        super.generateEnumProperties(enums);

        enums.declareStartRight = " {";
        enums.declareLastRight = "";
        enums.isObject = false;
    }

    /**
     * Generates metadata on exceptions.
     * 
     * @param exceptions   A property container for metadata on exceptions.
     */
    protected generateExceptionProperties(exceptions: ExceptionProperties): void {
        super.generateExceptionProperties(exceptions);

        exceptions.className = "Error";

        exceptions.requiresExceptionType = false;
    }

    /**
     * Generates metadata on file contents.
     * 
     * @param files   The property container for metadata on file contents.
     */
    protected generateFileProperties(files: FileProperties): void {
        files.endLines = [];
        files.indentation = 0;
        files.startCase = CaseStyle.FileSystemLowerCase;
        files.startLines = [];
    }

    /**
     * Generates metadata on functions.
     * 
     * @param functions   A property container for metadata on functions.
     */
    protected generateFunctionProperties(functions: FunctionProperties): void {
        super.generateFunctionProperties(functions);

        functions.defineStartLeft = "function ";
        functions.defineStartRight = " {";
        functions.returnTypeAfterName = true;
        functions.returnTypeMarker = ": ";
    }

    /**
     * Generates general metadata.
     * 
     * @param general   A property container for general metadata.
     */
    protected generateGeneralProperties(general: GeneralProperties): void {
        general.extension = ".ts";
        general.name = "TypeScript";
    }

    /**
     * Generates metadata on imports.
     * 
     * @param imports   A property container for metadata on imports.
     */
    protected generateImportProperties(imports: ImportProperties): void {
        imports.case = CaseStyle.DirectoryLowerCase;
        imports.explicit = true;
        imports.itemsBeforePackage = true;
        imports.leftAbsolute = "import { ";
        imports.leftLocal = "import { ";
        imports.middle = " } from \"";
        imports.right = "\";";
        imports.useLocalRelativeImports = true;
        imports.useLocalRelativePaths = true;
    }

    /**
     * Generates metadata on imports.
     * 
     * @param imports   A property container for metadata on imports.
     */
    protected generateInterfaceProperties(interfaces: InterfaceProperties): void {
        interfaces.declareStartLeft = "interface ";
        interfaces.declareStartRight = " {";
        interfaces.declareExtendsLeft = " extends ";
        interfaces.declareExtendsRight = ", ";
        interfaces.declareEnd = "}";
        interfaces.declareMethodLeft = "";
        interfaces.declareMethodMiddle = "(";
        interfaces.declareMethodRight = ")";
        interfaces.declareImplementsExplicit = true;
        interfaces.methodTypeAfter = true;
        interfaces.supported = true;
    }

    /**
     * Generates metadata on lambdas.
     * 
     * @param lambdas   A property container for metadata on lambdas.
     */
    protected generateLambdaProperties(lambdas: LambdaProperties): void {
        super.generateLambdaProperties(lambdas);

        lambdas.functionMiddle = ") => ";
    }

    /**
     * Generates metadata on lists.
     * 
     * @param lists   A property container for metadata on lists.
     */
    protected generateListProperties(lists: ListProperties): void {
        lists.asArray = true;
        lists.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);
        lists.pop = new NativeCallProperties(
            "pop",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.popFront = new NativeCallProperties(
            "shift",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.push = new NativeCallProperties(
            "push",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.addList = new NativeCallProperties(
            "concat",
            NativeCallScope.Member,
            NativeCallType.Function);
        lists.sort = new NativeCallProperties(
            "sort",
            NativeCallScope.Member,
            NativeCallType.Function);
    }

    /**
     * Generates metadata on loops.
     * 
     * @param loops   A property container for metadata on loops.
     */
    protected generateLoopProperties(loops: LoopProperties): void {
        super.generateLoopProperties(loops);

        loops.foreach = "for";
        loops.forEachGetKeys = "";
        loops.forEachGetPairs = "";
        loops.forEachMiddle = " in ";
        loops.forEachPairsAsKeys = true;
        loops.forEachRight = "";

        loops.forEachStartLeft = "for";
        loops.forEachStartItteration = " (";
        loops.forEachStartSeparator = " of ";
        loops.forEachStartRight = ") {";
    }

    /**
     * Generates metadata on math.
     * 
     * @param math   A property container for metadata on math.
     */
    protected generateMathProperties(math: MathProperties): void {
        math.absolute = new NativeCallProperties(
            "Math.abs",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.floor = new NativeCallProperties(
            "Math.floor",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.max = new NativeCallProperties(
            "Math.max",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.min = new NativeCallProperties(
            "Math.min",
            NativeCallScope.Static,
            NativeCallType.Function);
        math.requiredImports = [];
        math.mathName = "Math";
    }

    /**
     * Generates metadata on new object instantiation.
     * 
     * @param newProp   A property container for metadata on new object instantiation.
     */
    protected generateNewProperties(newProp: NewProperties): void {
        newProp.instantiationKind = NewInstantiationSyntaxKind.Prefix;
        newProp.keyword = "new";
    }

    /**
     * Generates metadata on numbers.
     * 
     * @param numbers   A property container for metadata on numbers.
     */
    protected generateNumberProperties(numbers: NumberProperties): void {
        numbers.className = "Number";
    }

    /**
     * Generates metadata on operators.
     * 
     * @param operators   A property container for metadata on operators.
     */
    protected generateOperatorProperties(operators: OperatorProperties): void {
        super.generateOperatorProperties(operators);

        operators.equalTo = "===";
        operators.notEqualTo = "!==";
    }

    /**
     * Generates metadata on output.
     * 
     * @param output   A property container for metadata on output.
     */
    protected generateOutputProperties(output: OutputProperties): void {
        output.print = "console.log";
    }

    /**
     * Generates metadata on parameters
     * 
     * @param parameters    A property container for metadata on parameters
     */
    protected generateParameterProperties(parameters: ParameterProperties): void {
        parameters.restDeclarationAfter = true;
        parameters.restDeclarationType = true;
        parameters.restKeywordLeft = "...";
        parameters.restKeywordMiddle = ": ";
        parameters.restKeywordRight = "[]";
    }

    /**
     * Generates metadata on style.
     * 
     * @param style   The property container for metadata on style. 
     */
    protected generateStyleProperties(style: StyleProperties): void {
        super.generateStyleProperties(style);

        style.mainEndLines = ["})();"];
        style.mainIndentation = 1;
        style.mainStartLines = [
            "(() => {"
        ];

        style.printEnd = ")";
        style.printStart = "console.log(";
    }

    /**
     * Generates metadata on strings.
     * 
     * @param strings   A property container for metadata on strings.
     */
    protected generateStringProperties(strings: StringProperties): void {
        super.generateStringProperties(strings);

        strings.className = "String";
        strings.index = new NativeCallProperties(
            "indexOf",
            NativeCallScope.Member,
            NativeCallType.Function);
        strings.length = new NativeCallProperties(
            "length",
            NativeCallScope.Member,
            NativeCallType.Property);
    }

    /**
     * Generates metadata on string formatting.
     * 
     * @param strings   A property container for metadata on string formatting.
     */
    public generateStringFormatProperties(formatting: StringFormatProperties): void {
        formatting.formatLeft = "`";
        formatting.formatRight = "`";
        formatting.formatInputLeft = "${";
        formatting.formatInputRight = "}";
        formatting.inputTypes = false;
        formatting.useInterpolation = true;
    }

    /**
     * Generates metadata on variables.
     * 
     * @param variables   A property container for metadata on variables.
     */
    protected generateVariableProperties(variables: VariableProperties): void {
        super.generateVariableProperties(variables);

        variables.aliases = {
            "infinity": "Infinity"
        };
        variables.castLeft = "<";
        variables.castRight = ">";
        variables.declaration = "let ";
        variables.explicitTypes = true;
        variables.null = "undefined";
        variables.typesAfterName = true;
        variables.typeLeft = ": ";
        variables.isNullLeft = "";
        variables.isNotNullLeft = "";
        variables.isNotNullMiddle = " !== ";
        variables.isNullMiddle = " === ";
        variables.nullRight = "undefined";
    }
}
