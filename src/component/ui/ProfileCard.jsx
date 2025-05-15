import { CircleArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProfileCard({project}) {
    return (
        <>
            <Link
                to={project.link}
                className="group block relative overflow-hidden rounded-s border border-[#A1AEBF]  p-6 transition-colors hover:border-customred"
                target='_blank'
            >
                {project.image && (
                    <div className={project.image ? "mb-6 overflow-hidden rounded-s" : ""}>
                        <img
                            src={`/images${project.image}.png`}
                            alt={project.title}
                            width={365}
                            height={142}
                            className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                )}
                <div className="mb-5">
                    <span className="inline-block rounded bg-customred px-2 py-1 text-sm font-medium text-black">
                        {project.category}
                    </span>
                </div>
                <h3 className="mb-5 text-2xl font-bold text-white">
                    {project.title}                                                       
                </h3>
                <div className="flex items-center text-[#728095] transition-colors group-hover:text-customred">
                    View
                    <CircleArrowRight className="ml-2 h-4 w-4" />
                </div>
            </Link>
        </>
    )
}
