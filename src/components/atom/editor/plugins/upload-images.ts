import { toast } from 'sonner';
import { EditorState, Plugin, PluginKey } from '@tiptap/pm/state';
import { Decoration, DecorationSet, EditorView } from '@tiptap/pm/view';

const uploadKey = new PluginKey('upload-image');

const UploadImagesPlugin = () =>
  new Plugin({
    key: uploadKey,
    state: {
      init() {
        return DecorationSet.empty;
      },
      apply(tr, set) {
        set = set.map(tr.mapping, tr.doc);
        // See if the transaction adds or removes any placeholders
        const action = tr.getMeta(uploadKey);
        if (action && action.add) {
          const { id, pos, src } = action.add;

          const placeholder = document.createElement('div');
          placeholder.setAttribute('class', 'img-placeholder');
          const image = document.createElement('img');
          image.setAttribute(
            'class',
            'opacity-40 rounded-lg border border-stone-200'
          );
          image.src = src;
          placeholder.appendChild(image);
          const deco = Decoration.widget(pos + 1, placeholder, {
            id,
          });
          set = set.add(tr.doc, [deco]);
        } else if (action && action.remove) {
          set = set.remove(
            set.find(
              undefined,
              undefined,
              (spec) => spec.id == action.remove.id
            )
          );
        }
        return set;
      },
    },
    props: {
      decorations(state) {
        return this.getState(state);
      },
    },
  });
export default UploadImagesPlugin;
