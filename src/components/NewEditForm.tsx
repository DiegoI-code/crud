import * as Yup from 'yup';
/* import { useSnackbar } from 'notistack'; */
import { useEffect, useMemo } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import {
  Card,
  Grid,
  Stack,
} from '@mui/material';

// routes
// @types
import FormProvider from '../components/hook-form/FormProvider';
import RHFTextField from '../components/hook-form/RHFTextField';


// ----------------------------------------------------------------------

interface FormValuesProps extends Omit<ProductBrand, 'id' > {
}

type Props = {
  isEdit?: boolean;
  currentBrand?: any;
};

export default function NewEditForm({ isEdit, currentBrand }: Props) {
  const { push } = useRouter();

  /* const { enqueueSnackbar } = useSnackbar();

  const { getIdToken } = useAuth();
  const { createBrand, updateBrand } = useApi(); */

  const NewBrandSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
  });

 /*  const defaultValues = useMemo<FormValuesProps>(
    () => ({
      name: currentBrand?.name ?? '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ); */

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewBrandSchema),
    defaultValues,
  });

  const {
    reset,
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

/*   useEffect(() => {
    if (isEdit && currentBrand) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
  }, [isEdit, currentBrand]); */

  const onSubmit = async (data: any /* FormValuesProps */) => {
    /* try {
      //await new Promise((resolve) => setTimeout(resolve, 500));
      const token = await getIdToken();
      const values = getValues();
      let response;
      if(!isEdit) {
        response = await createBrand(token, values);
      } else {
        response = await updateBrand(token, currentBrand?.id, values);
      }
       
      if(response.success) {
        enqueueSnackbar('Marca guardada!');
        reset();
        push(PATH_DASHBOARD.brand.list);
      } else {
        throw 'API error';
      }
      return;
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Error al guardar Marca.', {
        variant: 'error'
      });
    } */
  };



  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>

              {isEdit? <RHFTextField name="name" label="Nuevo nombre de la Marca" /> : <RHFTextField name="name" label="Nombre de la Marca" />}
            
              <LoadingButton disabled={isEdit && !currentBrand} type="submit" variant="contained" size="large" /* loading={isSubmitting} */>
                {'Guardar'}
              </LoadingButton>
            
            </Stack>
          </Card>
        </Grid>
         
      </Grid>
    </FormProvider>
  );
}
