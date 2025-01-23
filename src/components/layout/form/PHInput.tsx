import { useFormContext } from "react-hook-form"

export default function PHInput({type, name}) {
    const {register} = useFormContext()
    
  return <input type={type} id={name} {...register(name)} />
}
