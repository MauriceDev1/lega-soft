import Link from "next/link";

export default function ForgotPassword() {
    return (
        <div className="flex flex-col justify-center items-center bg-white h-screen md:absolute md:top-0 w-full z-0">
            <div className="mx-auto flex w-full flex-col justify-center px-5 pt-0 md:max-w-1/2 lg:h-screen min-h-screen lg:max-w-1/2 lg:px-6">
                <div className="my-auto mb-auto mt-8 flex flex-col md:mt-16 w-80 max-w-lg mx-auto lg:mt-56 lg:max-w-lg">
                <p className="text-2xl font-bold text-zinc-950 dark:text-white">Forgot Password</p>
                <p className="mb-2.5 mt-2.5 text-zinc-950 dark:text-zinc-400">Enter your email!</p>
                <div className="relative my-4">
                    <div className="relative flex items-center py-1">
                    <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                    <div className="grow border-t border-zinc-200 dark:border-zinc-700"></div>
                    </div>
                </div>
                <div>
                    <form noValidate className="mb-4">
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                        <label className="text-zinc-950 dark:text-white" htmlFor="email">Email</label>
                        <input
                            className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            name="email"
                        />
                        </div>
                        <button
                        className="whitespace-nowrap ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex h-auto w-full items-center bg-black text-white justify-center rounded-lg px-4 py-4 text-sm font-medium"
                        type="submit"
                        >
                        Reset Password
                        </button>
                    </div>
                    </form>
                    <p><Link href="/login" className="font-medium text-zinc-950 dark:text-white text-sm">Remember my password! <span className="text-blue-500">Login</span></Link></p>
                </div>
                </div>
            </div>
        </div>
    )
}
