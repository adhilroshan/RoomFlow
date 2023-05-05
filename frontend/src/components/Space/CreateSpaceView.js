import { useForm } from 'react-hook-form';

export default function CreateSpaceView() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return <>
        <div className="max-w-2xl mx-auto bg-white p-16">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label
                            htmlFor="first_name"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Catagory
                        </label>
                        <select {...register("Catogory", { required: true })} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '>
                            <option value="Room">Room</option>
                            <option value="Parking">Parking</option>
                            <option value="Storage">Storage</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="last_name"
                            className="block mb-2 text-sm font-medium text-black"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="last_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" s
                            {...register("Price", { required: true })}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="company"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Area of the space in square feet
                        </label>
                        <input
                            type="number"
                            id="company"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("Area", { required: true })}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Phone number
                        </label>
                        <input
                            type="number"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="123-45-678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            {...register("PhoneNumber", { required: true })}

                        />
                    </div>
                    <div>
                        <label
                            htmlFor="location"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Location
                        </label>
                        <input
                            type="url"
                            id="website"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("Location", { required: true })}

                        />
                    </div>

                </div>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 "
                        placeholder="example@email.com"
                        {...register("Email", { required: true })}

                    />
                </div>


                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Create Space
                </button>
            </form>
        </div>

    </>
}
