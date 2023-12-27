import { useState, useCallback, useEffect } from 'react';
import { contentType, extensionType } from '../components/type';

interface CustomFormBuilderSettings {
  extensions: extensionType[];
  content: contentType[];
  onChange: (updatedContent: contentType[]) => void;
}

const useFormBuilder = ({ extensions, content, onChange }: CustomFormBuilderSettings) => {
  const [formContent, setFormContent] = useState(content);

  useEffect(() => {
    setFormContent(content);
  }, [content]);
  

  const customOnChange = useCallback(
    (newContent: contentType[]) => {
        onChange(newContent);
    },
    [formContent, onChange]
  );
  return {
    formContent,
    onChange: customOnChange,
    extensions,
  };
};

export default useFormBuilder;
