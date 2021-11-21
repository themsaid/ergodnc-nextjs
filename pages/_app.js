import 'tailwindcss/tailwind.css'

function MyApp({Component, pageProps}) {
    return (
        <>
            <main className="shadow">
                <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-center p-4 sm:p-7 relative z-10 space-x-2 sm:space-x-3">
                    <a className="block" href="https://partners.laravel.com/">
                        <h1 className="text-2xl font-black"><span className="text-purple-700">ergo</span>dnc</h1>
                    </a>

                    <div className="flex items-center w-auto space-x-2 sm:space-x-3">
                        <a className="h-10 relative inline-flex items-stretch group border border-purple-700 focus:outline-none" href="https://partners.laravel.com/partners">
                            <span className="bg-white inline-flex items-center justify-center px-3 sm:px-5 text-purple-700 leading-none font-medium w-full transform transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-focus:-translate-x-1 group-focus:-translate-y-1 shadow-purple-button-border">Browse</span>
                        </a>
                        <a className="h-10 relative inline-flex items-stretch group border border-purple-700 focus:outline-none" href="https://partners.laravel.com/join">
                            <span className="bg-purple-700 inline-flex items-center justify-center px-3 sm:px-5 text-white leading-none font-medium w-full transform transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-focus:-translate-x-1 group-focus:-translate-y-1 shadow-purple-button-border">Join</span>
                        </a>
                    </div>
                </div>
            </main>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
