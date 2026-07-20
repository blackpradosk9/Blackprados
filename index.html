import React, { useRef, useEffect } from 'react';
import { SiteContent } from '../types';

interface EditableProps {
  textKey: string;
  defaultText: string;
  siteContent: SiteContent;
  updateContent: (key: string, value: string) => void;
  editMode: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div' | 'span';
}

export const Editable: React.FC<EditableProps> = ({
  textKey,
  defaultText,
  siteContent,
  updateContent,
  editMode,
  className = '',
  as = 'span'
}) => {
  const elRef = useRef<HTMLElement | null>(null);
  const textValue = siteContent[textKey] !== undefined ? siteContent[textKey] : defaultText;

  // Sync content with ref if it changed from outside
  useEffect(() => {
    if (elRef.current && !editMode) {
      elRef.current.innerHTML = textValue;
    }
  }, [textValue, editMode]);

  const handleBlur = () => {
    if (elRef.current) {
      const newValue = elRef.current.innerHTML.trim();
      if (newValue !== textValue) {
        updateContent(textKey, newValue);
      }
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (editMode && elRef.current) {
      e.preventDefault();
      e.stopPropagation();
      elRef.current.contentEditable = 'true';
      elRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.shiftKey === false && as !== 'p' && as !== 'div') {
      e.preventDefault();
      elRef.current?.blur();
    }
  };

  // Build class names
  const classes = [
    className,
    editMode ? 'editable-hover' : ''
  ].filter(Boolean).join(' ');

  // Define component tags dynamically
  const ComponentTag = as;

  return (
    <ComponentTag
      ref={elRef as any}
      className={classes}
      onClick={handleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      suppressContentEditableWarning={true}
      dangerouslySetInnerHTML={{ __html: textValue }}
    />
  );
};
