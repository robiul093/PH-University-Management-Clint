import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/layout/form/PHForm";
import PHInput from "../components/layout/form/PHInput";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: '0001',
  //     password: 'admin12345'
  //   }
  // });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    const userInfo = {
      id : data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const toastId = toast.loading('Logdin....');
    const user = verifyToken(res.data.accessToken) as TUser;
    dispatch(setUser({ user: user, token: res.data.accessToken }))
    toast.success('logdin', {id: toastId})
    if(user){
      navigate('/')
    }
  }

  return (
    <PHForm onSubmit={onSubmit}>
      <div>
        <label htmlFor="id">ID:</label>
        <PHInput type={'text'} name={'userId'}/>
      </div>
      <div>
        <label htmlFor="id">Password:</label>
        <PHInput type={'text'} name={'password'}/>
      </div>
      <Button htmlType='submit'>Submit</Button>
    </PHForm>
  )
}
