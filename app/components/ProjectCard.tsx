type ProjectCardProps = {
    name: string;
    description: string;
    url: string;
};

export default function ProjectCard({ name, description, url }: ProjectCardProps) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                GitHub'da Gör
            </a>
        </div>
    );
}
