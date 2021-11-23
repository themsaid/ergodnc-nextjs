import Head from 'next/head'
import Link from 'next/link'
import Button from '../../components/button'

export default function Office() {
    return (
        <>
            <Head>
                <title>Office Name</title>
            </Head>

            <div className="flex">
                <div className="w-1/2 h-80 relative overflow-hidden rounded-lg">
                    <img src="https://via.placeholder.com/400x400.png?text=PLACEHOLDER" className="object-cover w-full h-full"></img>
                </div>

                <div className="w-full pl-14">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Large office space</h1>
                        <span className="block font-semibold">$12 per day</span>
                    </div>
                    <p className="leading-loose mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam delectus doloremque doloribus eius eligendi molestiae molestias nihil nostrum nulla obcaecati omnis, quia quidem sequi sunt tempora temporibus vero voluptatum?
                    </p>
                    <Button className="mt-7">Book</Button>
                </div>
            </div>
        </>
    )
}
