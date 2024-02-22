import React from 'react'

export default function Login() {
  return (
    <div>
        <h3 align="center"><u>Login Page</u></h3>
        <form>
            <table align='center'>
                <tr>
                    <td><label>Enter Email Address</label></td>
                    <td><input type='email'/></td>
                </tr>
                
                <tr>
                    <td><label>Enter Password</label></td>
                    <td><input type='password'/></td>
                </tr>
                <tr align="center">
                    <td colSpan="2"><input type='submit' value='Login' className='button'/></td>
                </tr>
            </table>
        </form>
    </div>
  )
}