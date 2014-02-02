<?php

/**
 * @file
 * Template to display a views row in vertical_tabs.
 *
 * @ingroup views_templates
 */
?>
<div class="image-collage-grid overlay-inactive">
    <ul>
<?php foreach($blocks as $id => $b): ?>
    
        <li class="img-block" data-id="<?php echo $id ?>">    
            <?php echo $b['img']; ?>
            <div class="quote-bg" data-id="<?php echo $id ?>"></div>
            <div class="quote" data-id="<?php echo $id ?>">
                
                <?php echo $b['quote']; ?>
            </div>
        </li>
<? endforeach; ?>
    </ul>
    <div class="image-collage-overlays">
        
        <?php foreach($blocks as $id => $b): ?>
            <div class="overlay" id="overlay-<?php echo $id ?>">
                <div class="image-collage-overlay-container">
                        
                    <span class="image-collage-close-button">X</span>
                    <div class="image-collage-overlay-left">
                        <div class="image-collage-overlay-thumbnail">
                            <?php echo $b['img'] ?>
                        </div>
                        <div class="image-collage-details">
                            <span class="image-collage-name"><?php echo $b['name'] ?></span>
                            <span class="image-collage-tagline"><?php echo $b['tagline'] ?></span>
                        </div>
                    </div>
                    <div class="image-collage-overlay-right">
                        <?php echo $b['bio']; ?>
                    </div>
                
                
                </div>
            </div>
        <? endforeach; ?>
    </div>
</div>
<div class="image-collage-overlay-bg">
    
</div>