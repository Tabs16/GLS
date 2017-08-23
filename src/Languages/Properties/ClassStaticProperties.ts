import { ClassStaticFunctionProperties } from "./ClassStaticFunctionProperties";
import { ClassStaticVariableProperties } from "./ClassStaticVariableProperties";

/**
 * Metadata on a language's class static variables and functions.
 */
export class ClassStaticProperties {
    /**
     * Metadata on class member functions.
     */
    public functions: ClassStaticFunctionProperties = new ClassStaticFunctionProperties();

    /**
     * The keyword for a static class or member.
     */
    public label: string;

    /**
     * Whether the static label should come before its publicity type..
     */
    public labelBeforePublicity: boolean;

    /**
     * Metadata on class member variables.
     */
    public variables: ClassStaticVariableProperties = new ClassStaticVariableProperties();
}
