---
to: src/Forms/<%= name %>/config.ts
---
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FormConfig, IFormActionProps } from 'react-forms';
import * as Yup from 'yup';





export const useFormConfig = () => {
    const classes = useStyles();
    const validationSchema = Yup.object({
        
    })
    const actionConfig: IFormActionProps = {
        submitButtonText: 'NEXT',
        submitButtonLayout: 'fullWidth',
        submitButtonProps: {
            size: 'large'
        },
        containerClassNames: classes.buttonContainer
    };
    const inputConfig: Array<Array<FormConfig> | FormConfig> = [
        
    ];
    return { actionConfig, inputConfig, validationSchema }
}




const useStyles = makeStyles((theme: Theme) => createStyles({
    buttonContainer: {

    }
}))