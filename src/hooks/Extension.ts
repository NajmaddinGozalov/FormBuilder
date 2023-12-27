import { extensionType } from "../components/type";

export class Extension {
    ExtensionList: extensionType[] = [];
    extend(extension: extensionType[]) {
        {
            extension.forEach((extension) => {
                this.ExtensionList.push(extension);
            });
            return this.ExtensionList;
        }
    }
}