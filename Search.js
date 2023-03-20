import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<FontAwesomeIcon icon={faMagnifyingGlass} />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
			/>
		</div>
	);
};
export default Search;
