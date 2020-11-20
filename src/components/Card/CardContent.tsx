import React from 'react'
import IconBell from 'src/assets/icons/Bell'
import IconCallender from 'src/assets/icons/Callender'

interface Props {

}

const CardContent = (props: Props) => {
	return (
		<>
			<p className="px-4 mb-3">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
				earum odio veniam molestias at ea voluptatum officia dolorem
				sed facilis cum maxime magni ad dolores obcaecati dolor enim. Ex, fugit?
         </p>
			<div className="flex px-4 flex-col">
				<div className="authors flex text-center items-center ">
					<IconBell className="text-gray-600 mr-3 text-2xl" />
					<span>Hanan</span>
				</div>
				<div className="authors flex text-center items-center  ">
					<IconCallender className="text-gray-600 mr-3 text-2xl mt-2" />
					<span className="mt-2">2 Days Ago</span>
				</div>
			</div>
			<div className="button px-4 mt-3 mb-5 flex justify-end cursor-pointer">
				<span className="bg-gray-900 text-white py-3 px-7 rounded-tr-2xl rounded-bl-2xl">Baca</span>
			</div>
		</>
	)
}

export default CardContent