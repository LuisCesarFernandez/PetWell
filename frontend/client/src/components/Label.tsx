interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props:Props) {
    return (
        <label className="block text-sm font-medium leading-6 text-gray-900"
        {...props}>
        </label>
    )
}
