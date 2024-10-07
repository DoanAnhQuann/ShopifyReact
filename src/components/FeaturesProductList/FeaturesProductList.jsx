

export default function FeaturesProductList({ descHeader, desc, children }) {
    return (
        <div className="flex gap-2 bg-gray-100 dark:bg-slate-600 px-4 py-6 font-karla">
            {children}
            <div>
                <h2 className="font-medium text-xl dark:text-white">
                    {descHeader}
                </h2>
                <p className="text-gray-600 dark:text-white">{desc}</p>
            </div>
        </div>
    );
}
