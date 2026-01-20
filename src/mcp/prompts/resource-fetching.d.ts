export default function createPrompt(): {
    name: string;
    config: {
        title: string;
        description: string;
        argsSchema: {};
    };
    handler: () => Promise<{
        messages: {
            role: "user";
            content: {
                type: "text";
                text: string;
            };
        }[];
    }>;
};
