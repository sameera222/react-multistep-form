import {FormWrapper} from "./FormWrapper";

type accountFormProps={
    email: string;
    password: string;
}

type userFormProps= accountFormProps & {
    updateFields: (fields: Partial<accountFormProps>)=>void;
}
export function AccountForm ({email, password, updateFields}: userFormProps){
    return(
        <FormWrapper title='Account Details'>
        <label>Email</label>
        <input autoFocus required type='email' value={email} onChange={e=> updateFields({email: e.target.value})}/>
        <label>Password</label>
        <input required type='password' value={password} onChange={e=> updateFields({password: e.target.value})}/>
        </FormWrapper>

    )
}