import Head from 'next/head'
import Link from 'next/link'
import Button from '../../components/button'
import axios from '../../lib/axios'


export default function Office({office}) {
    return (
        <>
            <Head>
                <title>ergodnc — {office.title}</title>
            </Head>

            <div className="flex">
                <div className="w-1/2 h-56 relative overflow-hidden rounded-lg">
                    <img src={office.images[0].path} className="object-cover w-full h-full"></img>
                </div>

                <div className="w-full pl-14">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">{office.title}</h1>
                        <span className="block font-semibold">${office.price_per_day / 100} per day</span>
                    </div>
                    <p className="leading-loose mb-5">
                        {office.description}
                    </p>
                    <Button className="mt-10">Book</Button>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const response = await axios.get('/offices');

    return {
        fallback: false,
        paths: response.data.data.map(office => ({
            params: {id: office.id.toString()}
        }))
    };
}

export async function getStaticProps({params}) {
    const response = await axios.get(`/offices/${params.id}`);

    return {
        props: {
            office: response.data.data
        },
    }
}