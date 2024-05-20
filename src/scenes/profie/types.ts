import {InferType} from "yup";
import {schema} from "./schema.ts";

export type FormDataType = InferType<typeof schema>