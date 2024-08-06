import React from 'react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup'
import axios from 'axios'

const Login = () => {

    const initialValues = {
        email: '',
        username:'',
        password:''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is needed"),
        username: Yup.string().required("Username is needed"),
        password: Yup.string().required("Passowrd is needed")

    })

    const onSubmit = async (values, {setSubmitting}) =>{
        try{
            const result = await axios.post('http://localhost:3000/register',{
                email: values.email,
                username: values.username,
                password: values.password
            });
            alert("Login Succesfull")
            console.log(result.data.message)
        }
        catch(error){
          alert("Error was found")
        }
        setSubmitting(false)
    }

  return (
    <div>
      <h2>Register</h2>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
        {({isSubmitting}) => (
        <Form>
          <div>
              <label htmlFor="email">Email</label>
              <Field type="text" name= "email"/>
          </div>
          <div>
              <label htmlFor="Username">Username</label>
              <Field type="text" name= "usernme"/>
          </div>
          <div>
              <label htmlFor="Password">Password</label>
              <Field type="text" name= "password"/>
          </div>
          <button type='submit' disabled={isSubmitting}>Login</button>
       </Form>
        )}
        </Formik>
      
    </div>
  )
}

export default Login


