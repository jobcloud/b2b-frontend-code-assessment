import { LanguageModel } from "./language.model";
import { ProductModel } from "./product.model";

export interface JobModel {
  id: string;
  ref: string;
  title: string;
  description: string;
  skills?: string[];
  languages: LanguageModel[];
  productType : ProductModel;
  activated: Boolean;
}

export type JobRequiredProps = Pick<JobModel, "ref" | "title" | "description" | "productType" | "languages" | "activated">;



