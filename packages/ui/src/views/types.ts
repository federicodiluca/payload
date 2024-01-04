import type { I18n } from '@payloadcms/translations'
import type { Permissions, User } from 'payload/auth'
import type { EditViewProps } from 'payload/config'
import type {
  Data,
  DocumentPermissions,
  DocumentPreferences,
  Payload,
  SanitizedConfig,
} from 'payload/types'

import type { FormState } from '../forms/Form/types'

export type ServerSideEditViewProps = EditViewProps & {
  action?: string
  apiURL: string
  canAccessAdmin?: boolean
  collectionConfig?: SanitizedConfig['collections'][0]
  config: SanitizedConfig
  data: Data
  disableActions?: boolean
  disableLeaveWithoutSaving?: boolean
  docPermissions: DocumentPermissions
  docPreferences: DocumentPreferences
  globalConfig?: SanitizedConfig['globals'][0]
  hasSavePermission?: boolean
  i18n: I18n
  id?: string
  initialState?: FormState
  isEditing?: boolean
  params?: {
    collection?: string
    global?: string
    segments: string[]
  }
  payload: Payload
  permissions: Permissions
  searchParams: { [key: string]: string | string[] | undefined }
  // isLoading: boolean
  updatedAt: string
  user: User
}