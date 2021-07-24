import React from 'react';

import GithubIcon from './SVGIcons/github';
import WebIcon from './SVGIcons/web';

type Props = {
	project: TProjects;
	inverted: boolean;
	isSecondary?: boolean;
	position: number;
};

const ProjectCard = ({ project, inverted, isSecondary, position }: Props) => {
	return (
		<div
			className={`project ${inverted && 'inverted'} ${
				isSecondary ? `secondary-${position}` : `main-${position}`
			}`}
		>
			<div className='project__description'>
				<h2 className='project--title'>
					{project.title}
					<span>{project.complement}</span>
				</h2>
				<p>{project.description}</p>
			</div>
			<div className='project__stack'>
				<div className='project--tech'>
					{project.technologies.ligth.map(icon => {
						const iconName: string = icon.split('/')[2];

						return (
							<img
								title={iconName.substring(iconName.length - 4, 0)}
								src={icon}
								alt='Technologie'
								key={`${project.id}${icon}`}
							/>
						);
					})}
				</div>
				<div className='project--links'>
					<a className='project--repo' target='_blank' href={project.social.github}>
						<GithubIcon size={'25'} />
						<span>Repository</span>
					</a>
					{project.social.web && (
						<a className='project--web' target='_blank' href={project.social.web}>
							<WebIcon size={'25'} />
							<span>{project.social.web}</span>
						</a>
					)}
				</div>
			</div>
			<div className='project__pictures'>
				<img
					src={project.images.X1}
					title={`${project.title}${project.complement} Picture`}
					alt={`${project.title}${project.complement}`}
				/>
			</div>
		</div>
	);
};

export default ProjectCard;
