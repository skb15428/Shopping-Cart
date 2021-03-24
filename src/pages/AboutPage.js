import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
	return (
		<main>
			<PageHero title='About'/>
			<Wrapper className="page section section-center">
				<img src={aboutImg} alt="hero-bcg" />
				<article>
					<div className="title">
						<h2>Our Story</h2>
						<div className="underline"></div>
					</div>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio culpa obcaecati repellat debitis delectus. Dolore iure facilis aperiam distinctio magnam minus sint, aliquid doloremque sapiente reiciendis consequuntur dolorem iste beatae porro tempore molestiae voluptas nesciunt! Quae debitis quis qui eligendi aperiam ipsa perferendis quibusdam omnis. Harum, qui! Fugiat, autem. Doloremque, sit optio. Eligendi voluptas hic laudantium labore animi quisquam doloremque. Quibusdam itaque odit reprehenderit, deleniti quo provident fugit vitae excepturi perferendis, eaque sit totam aspernatur, delectus nihil molestiae aliquam perspiciatis?</p>
				</article>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`;
export default AboutPage;
