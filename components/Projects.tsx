import React from 'react';

import GithubIcon from './SVGIcons/github';
import WebIcon from './SVGIcons/web';

const Projects = ({ projectsData }: { projectsData: TProjects[] }) => {
	return (
		<section className='projects__container'>
			<div className='projects--header'>
				<a target='_blank' href='https://github.com/NilsonKr'>
					My Pr
					<GithubIcon size='40' />
					jects
				</a>
			</div>
			<section id='projects' className='projects__list'>
				{projectsData.map(project => (
					<div className='project' key={project.id}>
						<div className='project__description'>
							<h2 className='project--title'>
								{project.title}
								<span>{project.complement}</span>
							</h2>
							<p>{project.description}</p>
						</div>
						<div className='project__extras'>
							<div className='project--tech'>
								{project.technologies.ligth.map(icon => (
									<img src={icon} alt='Technologie' key={`${project.id}${icon}`} />
								))}
							</div>
							<div className='project--links'>
								<div className='project--repo'>
									<GithubIcon size={'25'} />
									<a target='_blank' href={project.social.github}>
										Repository
									</a>
								</div>
								{project.social.web && (
									<div className='project--web'>
										<WebIcon size={'25'} />
										<a target='_blank' href={project.social.web}>
											{project.social.web}
										</a>
									</div>
								)}
							</div>
						</div>
						<div className='project__pictures'>
							<img src={project.images.X1} alt='' />
						</div>
					</div>
				))}
			</section>
		</section>
	);
};

export default Projects;
