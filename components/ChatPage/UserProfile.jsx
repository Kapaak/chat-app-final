import Avatar from "avataaars";
import styled from "styled-components";
import { useSnapshot } from "valtio";

import { state } from "../../globalState";
import { avatarConfigs } from "../../globalState/globalFunctions";

const UserProfile = () => {
	return (
		<StyledUserProfile>
			<div>{useSnapshot(state).username}</div>
			<StyledAvatar {...avatarConfigs(useSnapshot(state).selectedAvatar)} />
		</StyledUserProfile>
	);
};

const StyledUserProfile = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
	gap: 2rem;
`;

const StyledAvatar = styled(Avatar)`
	width: 5rem;
	height: 5rem;
`;

export default UserProfile;
