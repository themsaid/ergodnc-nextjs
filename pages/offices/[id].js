import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Office() {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Head>
                <title>Office {id}</title>
            </Head>

            <div className="flex">
                <div className="w-1/2 h-80 relative">
                    <Image src="http://api.ergodnc.test/1.jpg" className="rounded-lg" layout={"fill"}></Image>
                </div>

                <div className="w-full pl-14">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Large office space</h1>
                        <span className="block font-semibold">$12 per day</span>
                    </div>
                    <p className="leading-loose mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam delectus doloremque doloribus eius eligendi molestiae molestias nihil nostrum nulla obcaecati omnis, quia quidem sequi sunt tempora temporibus vero voluptatum?
                    </p>
                    <a className="h-10 relative inline-flex items-stretch group border border-purple-700 focus:outline-none" href="/book">
                        <span className="bg-purple-700 inline-flex items-center justify-center px-3 sm:px-5 text-white leading-none font-medium w-full transform transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-focus:-translate-x-1 group-focus:-translate-y-1 shadow-purple-button-border">Book</span>
                    </a>
                </div>
            </div>
        </>
    )
}
