import React from 'react';
import type { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';
import { useToaster } from '@harnessio/uicore';
import { GetApiTokensOkResponse, useCreateApiTokenMutation } from '@api/auth';
import { useStrings } from '@strings';
import CreateNewTokenView from '@views/CreateNewToken';

interface CreateNewTokenControllerProps {
  apiTokensRefetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<GetApiTokensOkResponse, unknown>>;
  handleClose: () => void;
}

export default function CreateNewTokenController(props: CreateNewTokenControllerProps): React.ReactElement {
  const { apiTokensRefetch, handleClose } = props;
  const { showSuccess } = useToaster();
  const { getString } = useStrings();

  const { mutate: createNewTokenMutation, isLoading } = useCreateApiTokenMutation(
    {},
    {
      onSuccess: data => {
        data.accessToken;
        apiTokensRefetch();
        showSuccess(getString('tokenCreateSuccessMessage'));
      }
    }
  );

  return (
    <CreateNewTokenView
      createNewTokenMutationLoading={isLoading}
      handleClose={handleClose}
      createNewTokenMutation={createNewTokenMutation}
    />
  );
}
