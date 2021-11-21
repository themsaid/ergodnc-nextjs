export default function Input({ disabled = false, className = '', ...props }) {
    return (
        <input
            disabled={disabled}
            className={`${className} outline-none border rounded border-gray-200 h-10 px-2`}
            {...props}
        />
    )
}
