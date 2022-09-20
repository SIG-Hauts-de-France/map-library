import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { UiElementsModule } from '@geonetwork-ui/ui/elements'
import { UtilSharedModule } from '@geonetwork-ui/util/shared'
import { RECORDS_FULL_FIXTURE } from '@geonetwork-ui/util/shared/fixtures'
import { RecordPreviewFeedComponent } from './record-preview-feed.component'
import { TranslateModule } from '@ngx-translate/core'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Search/RecordPreviewFeedComponent',
  component: RecordPreviewFeedComponent,
  decorators: [
    moduleMetadata({
      imports: [UtilSharedModule, UiElementsModule, TranslateModule.forRoot()],
    }),
  ],
} as Meta<RecordPreviewFeedComponent>

const Template: Story<RecordPreviewFeedComponent> = (
  args: RecordPreviewFeedComponent
) => ({
  component: RecordPreviewFeedComponent,
  props: { ...args, mdSelect: action('mdSelect') },
})

export const Primary = Template.bind({})
Primary.args = {
  record: RECORDS_FULL_FIXTURE[0],
  linkTarget: '_blank',
}
