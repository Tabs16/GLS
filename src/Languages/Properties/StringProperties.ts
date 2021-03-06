import { NativeCallProperties } from "./NativeCallProperties";
import { StringFormatProperties } from "./StringFormatProperties";

/**
 * Metadata on a language's Strings.
 */
export class StringProperties {
    /**
     * The name of the string class.
     */
    public className: string;

    /**
     * The name of the concatenation operator.
     */
    public concatenate: string;

    /**
     * Metadata on the language's string formatting.
     */
    public formatting: StringFormatProperties = new StringFormatProperties();

    /**
     * How to determine the index of a substring.
     */
    public index: NativeCallProperties;

    /**
     * How to retrieve a string's length.
     */
    public length: NativeCallProperties;
}
