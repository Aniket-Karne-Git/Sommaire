import { generateReactHelpers } from "@uploadthing/react";

import type { ourFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing } = generateReactHelpers<ourFileRouter>();
