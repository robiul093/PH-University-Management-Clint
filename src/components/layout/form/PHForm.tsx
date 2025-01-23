import { FormProvider, useForm } from "react-hook-form"

export default function PHForm({ onSubmit, children }) {

    const methods = useForm({
        defaultValues: {
          userId: 'A-0001',
          password: 'admin123'
        }
      });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}
