---
to: src/Forms/<%= name %>/index.tsx
---
import React from 'react';
import { ReactForm, attachField } from 'react-forms';
import { useFormConfig } from './config';

export interface <%= name %>FormData {
    
}

export interface <%= name %>FormProps {
    onSubmit: Function,
    initialData: Partial<<%= name %>FormData>
    isSubmitting: boolean
}


const <%= name %>Form: React.FC<<%= name %>FormProps> = (props) => {
    const { actionConfig, inputConfig, validationSchema } = useFormConfig()
    return (
        <ReactForm
            initialValues={props.initialData}
            formId="<%= name %>"
            config={inputConfig}
            actionConfig={actionConfig}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
            formSettings={{
                verticalSpacing: 20,
            }}
            isInProgress={props.isSubmitting}
        />
    )
}



export default <%= name %>Form
