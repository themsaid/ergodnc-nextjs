import Head from 'next/head'
import Link from 'next/link'
import Label from '../components/label'
import Input from '../components/input'
import Button from '../components/button'
import Errors from '../components/errors'
import {useState} from 'react'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = async event => {
        event.preventDefault()
    }

    return (
        <>
            <Head>
                <title>ergodnc — Register</title>
            </Head>

            <div className={"w-1/2 mx-auto bg-white p-5 rounded-lg"}>
                <Errors className="mb-5" errors={errors} />

                <form onSubmit={submitForm} autoComplete="off">
                    <div>
                        <Label htmlFor="email">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                            autoComplete="off"
                        />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password">Confirm Password</Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            value={password_confirmation}
                            className="block mt-1 w-full"
                            onChange={event => setPasswordConfirmation(event.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/login">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Already registered?
                            </a>
                        </Link>

                        <Button className="ml-3">Register</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
