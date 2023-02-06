import React, { FC, useMemo } from "react";
import { Text, Box, Static } from "ink";
import { Message } from "../types";
import Gradient from "ink-gradient";

type Props = {
	messages: Message[];
};

const History: FC<Props> = ({ messages }) => {
	// Only wan I've found to add header inside a Static component.
	const messagesWithHeader = useMemo(() => {
		return ["header" as any, ...messages];
	}, [messages]);

	return (
		<Box flexDirection="column">
			<Static items={messagesWithHeader}>
				{(msg, idx) => (
					<Box key={idx} flexDirection="row" width="100%">
						{idx === 0 ? (
							<Gradient name="retro">
								<Text color="cyanBright">Welcome, NovaEra</Text>
							</Gradient>
						) : (
							<Box
								borderColor="blue"
								borderStyle="round"
								alignSelf="flex-end"
								padding={1}
								paddingRight={2}
							>
								<Box marginRight={1}>
									<Text>{msg.from === "user" ? "" : ""}</Text>
								</Box>
								<Box>
									{msg.from === "user" ? (
										<Text color="white">{msg.text}</Text>
									) : (
										<Gradient name="retro">
											<Text color="white">{msg.text}</Text>
										</Gradient>
									)}
								</Box>
							</Box>
						)}
					</Box>
				)}
			</Static>
		</Box>
	);
};

export default History;
