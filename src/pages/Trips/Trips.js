import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withPageContext from 'hoc/withPageContext';
import { connect } from 'react-redux';

import AuthUserTemplate from 'templates/AuthUserTemplate';
import TripCard from 'components/TripCard/TripCard';
import PageHeader from 'components/PageHeader/PageHeader';
import Button from 'components/Button/Button';

import { gap, breakpoints } from 'theme/GlobalStyle';

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const StyledTripsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    grid-template-rows: min-content;
    grid-gap: ${gap.small};
    list-style: none;
    overflow-y: scroll;

    @media ${breakpoints.md} {
        grid-gap: ${gap.medium};
    }

    @media ${breakpoints.ld} {
        grid-gap: ${gap.big};
        margin-bottom: ${gap.big};
    }

    @media screen and (min-width: 1024px) and (orientation: portrait),
        (min-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }
`;

const StyledListItem = styled.li`
    margin: 0;
    padding: 0;
`;

const StyledButton = styled(Button)`
    width: 100%;
    max-width: 100%;
    margin: 1rem auto;
    z-index: 10;
    flex-shrink: 0;

    &:hover {
        transform: none;
        cursor: pointer;
    }
`;

const Trips = ({ trips, pageContext }) => (
    <AuthUserTemplate>
        <StyledWrapper>
            <PageHeader header={pageContext} subHeader="your" />
            <StyledTripsList>
                {trips.map(
                    ({
                        id,
                        image,
                        name,
                        startDate,
                        endDate,
                        duration,
                        startsIn,
                    }) => (
                        <StyledListItem key={id}>
                            <TripCard
                                id={id}
                                image={image}
                                name={name}
                                startDate={startDate}
                                endDate={endDate}
                                duration={duration}
                                startsIn={startsIn}
                            />
                        </StyledListItem>
                    ),
                )}
            </StyledTripsList>
            <StyledButton secondary>Add Trip</StyledButton>
        </StyledWrapper>
    </AuthUserTemplate>
);

Trips.propTypes = {
    trips: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string,
            name: PropTypes.string.isRequired,
            startDate: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            endDate: PropTypes.oneOfType([
                PropTypes.instanceOf(Date),
                PropTypes.string,
            ]).isRequired,
            duration: PropTypes.number.isRequired,
            startsIn: PropTypes.number.isRequired,
        }),
    ).isRequired,
    pageContext: PropTypes.oneOf(['trips', 'itinerary', 'expenses', 'todo'])
        .isRequired,
};

const mapStateToProps = ({ trips }) => trips;

export default connect(mapStateToProps)(withPageContext(Trips));
