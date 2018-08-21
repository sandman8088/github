import FilePatch, {nullFilePatch} from '../../../lib/models/patch/file-patch';
    assert.isTrue(filePatch.isPresent());

    assert.strictEqual(filePatch.getMaxLineNumberWidth(), 1);
  it('has a nullFilePatch that stubs all FilePatch methods', function() {
    const rowRange = new IndexedRowRange({bufferRange: [[0, 0], [1, 0]], startOffset: 0, endOffset: 10});

    assert.isFalse(nullFilePatch.isPresent());
    assert.isFalse(nullFilePatch.getOldFile().isPresent());
    assert.isFalse(nullFilePatch.getNewFile().isPresent());
    assert.isFalse(nullFilePatch.getPatch().isPresent());
    assert.isNull(nullFilePatch.getOldPath());
    assert.isNull(nullFilePatch.getNewPath());
    assert.isNull(nullFilePatch.getOldMode());
    assert.isNull(nullFilePatch.getNewMode());
    assert.isNull(nullFilePatch.getOldSymlink());
    assert.isNull(nullFilePatch.getNewSymlink());
    assert.strictEqual(nullFilePatch.getByteSize(), 0);
    assert.strictEqual(nullFilePatch.getBufferText(), '');
    assert.lengthOf(nullFilePatch.getAdditionRanges(), 0);
    assert.lengthOf(nullFilePatch.getDeletionRanges(), 0);
    assert.lengthOf(nullFilePatch.getNoNewlineRanges(), 0);
    assert.isFalse(nullFilePatch.didChangeExecutableMode());
    assert.isFalse(nullFilePatch.hasSymlink());
    assert.isFalse(nullFilePatch.hasTypechange());
    assert.isNull(nullFilePatch.getPath());
    assert.isNull(nullFilePatch.getStatus());
    assert.lengthOf(nullFilePatch.getHunks(), 0);
    assert.isFalse(nullFilePatch.getStagePatchForLines(new Set([0])).isPresent());
    assert.isFalse(nullFilePatch.getStagePatchForHunk(new Hunk({changes: [], rowRange})).isPresent());
    assert.isFalse(nullFilePatch.getUnstagePatchForLines(new Set([0])).isPresent());
    assert.isFalse(nullFilePatch.getUnstagePatchForHunk(new Hunk({changes: [], rowRange})).isPresent());
    assert.strictEqual(nullFilePatch.toString(), '');
  });