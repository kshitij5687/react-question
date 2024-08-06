import React from 'react'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup'
import axios from 'axios'

const Registeration = () => {

    const initialValues = {
        email: '',
        username:'',
        password:''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is needed"),
        username: Yup.string().required("Username is needed"),
        password: Yup.string()
        .min(8, "Password must be 8 letters long")
        .required("Password is required")

    })

    const onSubmit = async (values, {setSubmitting}) =>{
        try{
            const result = await axios.post('http://localhost:3000/registeration',{
                email: values.email,
                username: values.username,
                password: values.password
            });
            alert("Register Succesfull")
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
          <button type='submit'>Register</button>
       </Form>
        )}
        </Formik>
      
    </div>
  )
}

export default Registeration


