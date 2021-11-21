export default function Label({ children, className = '', ...props }) {
    return (
        <label
            className={`${className} block text-gray-700`}
            {...props}>
            {children}
        </label>
    )
}
