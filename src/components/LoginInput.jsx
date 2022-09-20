import { ErrorMessage, Field } from "formik";
import styled from "styled-components";

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;


const LoginInput = ({ name, type, placeholder }) => {
    return (
        <Field name={name}>
            {({ field, form: { errors } }) => (

              <div className="inputdiv">
                <input className='registerinput' type={type} placeholder={placeholder} {...field}  ></input>
                    <ErrorMessage name={field.name}>
                        {message => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
                    </ErrorMessage>
              </div>
            )}
        </Field>
    )
 }

export default LoginInput