export default function InputField({ label, type, id, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col justify-center p-1 mt-3 rounded-xl bg-black bg-opacity-0 text-neutral-500">
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                aria-label={label}
                className="justify-center items-start px-3 py-4 bg-white rounded-md border border-solid border-stone-300 max-md:pr-5"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}