export interface contentType{
    extension:string
    settings:contentSettings
}

interface contentSettings{
    type?:string,
    placeholder?:string,
    options?:string[],
    multiple?:boolean,
    label?:string
}
export interface extensionType {
    slug: string;
    title: string;
    description: string;
    icon: JSX.Element;
    settings: contentSettings;
    renderSettings: (settings: contentSettings) => JSX.Element;
    render: (settings: contentSettings) => JSX.Element; 
  }

  export interface FormBuilderProps {
    form: {
        formContent: contentType[]
        onChange: (newContent: any) => void;
        extensions: extensionType[];
    };
}