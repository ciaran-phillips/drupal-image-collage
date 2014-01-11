<?php

/**
 * @file
 * Template to display a views row in vertical_tabs.
 *
 * @ingroup views_templates
 */
?>
<div class="image-collage-grid">
    <ul>
<?php foreach($blocks as $id => $b): ?>
    
        <li class="img-block" data-id="<?php echo $id ?>">    
            <?php echo $b['img']; ?>
            <div class="quote">
                <?php echo $b['quote']; ?>
            </div>
        </li>
        
    
<? endforeach; ?>
    </ul>
    <div id="image-collage-overlays">
        <?php foreach($blocks as $id => $b): ?>
            <div class="overlay" id="overlay-<?php echo $id ?>">
                <?php echo $b['bio']; ?>
            </div>
        <? endforeach; ?>
    </div>
</div>