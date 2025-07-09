

export function Avatar({ nombre }) {

    return (

        <details className="relative inline-block cursor-pointer rounded-full">
            <summary className="avatar avatar-online w-12 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" alt="Avatar" />
            </summary>
            <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs rounded shadow px-2 py-1">
                {nombre}
            </div>
        </details>

    )




}



